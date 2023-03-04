# GUIDA JULIO VILLALOBOS

## DOCKER BACKEND
- cartella usata test_tecnico
- Per avviare la creazioni dei containers in docker mi sono dovuto installare 
    - docker installlato
    - docker-compose installato
    - Configurazione Kernell linux(Forzato)
    - All'interno della cartela test_tecnico lanciare da una powershell come amministratore
    - docker-compose -f "./docker-compose.yml" up --remove-orphans -V --build -d
    - Avviare i containers tramite dockers desktop
    - il backend girara su localhost:8000
    - per la guida delle api http://localhost:8000/docs#/ anche postman

## FRONTEND
- Cartella usata frontend
- per avviare il progetto angular lanciare npm start
- il frontend gira su http://localhost:4200
- per questione di semplicita per uso dimostrativo mi sono creato un progetto angular v15 da 0.
- libreria di supporto prime ng v13
- Struttura del progetto
   - Il progetto parte con un modulo radice AppModule all'interno del modulo principale se dividono su 3 moduli
   - Core (authentication, interceptors, services api) riservato ai dati sensibili
   - Modules (pages, auth) pages-routing-module per approffitare del caricamento pigro lazyloading 
   - Shared (components, directive,helpers, services, interfaces, etc...) genericos che possono servire in qualsiasi punto della applicazione

- Il componente dashboard utilizza (components smart and dumb) 
  sicuramente alcuni componenti possono essere generici ed stare nella cartella shared pero non ho avuto bisogno.
  per la comunicazione ho usato solo @input @output non ho avuto bisogno di altro tipo services

- Per la parte responsive ho usato le prime-flex di prime-ng molto simile a boostrap
- Occhio ho importanto i modules di prime-ng su dashboard.modules perche ho lavorato al momento solo su quel modulo
  pero sicuramente lo corretto in futuro sarebbe importare su pages.module o app.module tutto dipende della richiesta di uso di nostri componenti
- Per il consumo dell'API e problema del CORS
   - ho configurato un proxy.conf.json e usato sul angular.json
   - per l'autorizzazione mi sono creato un Interceptor sulla cartella Core per l'inserimento del token nel headers

## NOTE
- Non ho potuto deployare su docker perche sono le mie prime esperienze e anche per mancanza di tempo scusate :(
- Un altro punto ho cercato d'interpretare il piu posibile la documentazione del test sicuramente ci saranno cose che possono aver preso un risultato diverso.
- In linea generali spero di aver dato al meno una panoramica di come ho voluto afrontare questo test.
- Scusate il mio italiano buon lavoro e grazie.




