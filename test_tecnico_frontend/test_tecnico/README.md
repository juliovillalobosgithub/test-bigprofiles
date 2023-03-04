## Requisiti

    - Avere docker installlato
    - Avere docker-compose installato

## Avvertenze

Per lanciare l'applicativo usare il comando './bin/start.sh' direttamente dalla cartella root: lo script è pensato per funzionare su sistemi UNIX, nel caso di utilizzo di sistemi Windows copiare il comando docker-compose all'interno dello script e lanciarlo manualmente.

L'applicato Backend gira su porta 8000 su localhost.

Per fermale lo stack applicativo usare il comando 'bin/stop.sh'.

Per la documentazione API dell'applicativo backend andare su http://localhost:8000/docs#/ in cui sarà visibile lo Swagger.

Nel caso in cui si voglia utilizzare Docker per il deploy finale del progetto, utilizzare la cartella "frontend" (in cui viene fornito un Dockerfile di esempio) e togliere i commenti nel docker-compose.yml per la parte dell'applicativo frontend.
