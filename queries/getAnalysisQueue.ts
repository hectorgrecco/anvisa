import * as request from 'request';

const getAnalysisQueue = (field: number, queue: number, subqueue: number) => {
    try {
        const options = {
            url: 'https://consultas.anvisa.gov.br/api/fila/',
            headers: { Authorization: 'guest' },
            qs: { 'filter[area]': field, 'filter[fila]': queue, 'filter[subfila]': subqueue }
        };

        request.get(options, async (err, response, body) => {
            if (err) throw err;
            const parsedBody = JSON.parse(body);
            const queues: any = []

            await parsedBody.map((item: any) => {
                const queue = {
                    analysis_order: item[0],
                    entry_date: item[1],
                    proccess_id: item[7],
                    subject_code: item[3],
                    subject_description: item[4],
                    expedient: item[2],
                }

                queues.push(queue)
            })

            return queues
        });
    } catch(error) {
        return error
    }
};

export { getAnalysisQueue }