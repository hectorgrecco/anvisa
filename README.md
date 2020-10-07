# anvisa
💊 Pacote para consulta de documentos, empresas e produtos na ANVISA.

 - Este pacote utiliza as APIs abertas da ANVISA para consulta, porém com payloads de retorno mais "humanos" em relação ao original;
 - Por hora, só está disponível a consulta para a **Fila de análise**, novas consultas serão adicionadas com o tempo;
 - Este é um projeto open-source, fique a vontade para abrir PRs e contribuir com o projeto;
 - Este projeto não tem nenhum vínculo com a ANVISA ou o governo, e não tem fins lucrativos, somente visa ajudar desenvolvedores que precisem buscar dados da Agência Nacional de Vigilância Sanitária.

## Utilização

    npm i anvisa --save
   
ou 

    yarn add anvisa
 
 ----

**Chamando o pacote:**

    const anvisa = require('anvisa')
    
   ou
   

    import anvisa from 'anvisa'

----

Para fazer uma consulta de fila de análise, chamamos o método:

    anvisa.getAnalysisQueue(field, queue, subqueue)

Onde:

|campo|valor  |
|---|---|
|field  | ID da Área de Interesse |
| queue | ID da Fila |
| subqueue | ID da Subfila



---

**Exemplo:**

    anvisa.getAnalysisQueue(6, 522, 804)


   
|id| valor |
|---|---|
|field: 6  | Alimento |
|queue: 522| Avaliação |
|subqueue: 804| ADITIVOS ALIMENTARES E COADJUVANTES DE TECNOLOGIA,EXCETO AROMATIZANTES DE ESPÉCIE BOTÂNICA E ENZIMAS |

---
**Payload de resposta:**

   

    [
	    {
		    analysis_order: 1,
		    entry_date: '2020-02-26T16:00:01.000-0300',
		    proccess_id: '25351126612202024',
		    subject_code: '4113',
		    subject_description: 'Avaliação de extensão de uso de aditivos alimentares, exceto espécies botânicas',
		    expedient: '0581595203'
	    }
    ]

onde:

|parâmetro| descrição |
|---|---|
|analysis_order  | Ordem análise |
|entry_date| Data de entrada |
|proccess_id| Processo |
|subject_code| Código de assunto |
|subject_description| Descrição do assunto |
|expedient| Expediente |

## Considerações

 - Falta evoluir bastante o TS, que não está sendo utilizado no seu poder máximo;
 - Tabela com IDs dos possíveis valores para filas, subfilas e áreas de interesse será disponibilizada com o tempo.
