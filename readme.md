# Game of Life in JavaScript
Small exercise coded for the Algoritmer & Datastrukturer course on EK Firskovvej Datamtiker 4. semester efterår 2025.

## Conway’s Game of Life

Du skal lave en visualisering af Conway’s Game of Life der automatisk skifter generationer og viser levende og døde celler i et grid.

Reglerne for Game of Life er:

- Hver eneste celle i grid’et kan enten være levende eller død
- Når “spillet” starter, er det med et tilfældigt grid hvor nogle celler er levende.
- For hver generation besluttes det om hver eneste celle skal leve eller dø, ud fra antallet af naboer:
    - < 2 naboer - cellen dør af ensomhed
    - 2 naboer - cellen lever videre, hvis den altså var levende
    - 3 naboer - en ny celle bliver født, eller lever videre, hvis der var en
    - > 3 naboer - cellen død af overbefolkning
    
    Beslutningerne træder først i kraft for næste generation - og i samme øjeblik for samtlige celler. Der er altså ikke noget med at en nyfødt celle kan påvirke sine naboer før næste generation.
    

Du skal lave en visualisering der automatisk viser cellerne, beregner næste generation, venter et par millisekunder, viser den generation, beregner den næste og så fremdeles.

# Krav

- Du skal lave din kode med adskilt model og view - begge dele skal være et “grid”, og din model skal anvende din egen udviklede [datastruktur - Grid](https://www.notion.so/datastruktur-Grid-2921d7fec0978149a70afdd1882066f8?pvs=21)
- Du skal lave koden så fleksibel som muligt, så det i princippet vil være nemt at ændre grid-størrelse - ikke mens programmet kører, men før opstart.
- Du skal have én funktion til at tælle naboer - og en anden funktion til at beslutte om en celle lever eller dør baseret på antallet af naboer.
- Siden skal tælle og vise antallet af generationer der er blevet vist siden programmet startede.
- Der skal være en brugerflade hvor brugeren som minimum kan:
    - tømme grid’et fuldstændig for levende celler
    - tilføje et antal levende celler tilfældigt rundt omkring på grid’et (må ikke slette dem der er!)
- Generationer skal beregnes automatisk, for eksempel hvert halve sekund, så brugeren ikke behøver gøre noget som helst efter at have åbnet programmet.

## Variationer

- Du bestemmer selv størrelsen på grid’et - men ikke mindre end 10x10
- Du bestemmer selv om grid’et skal være et afgrænset rektangel, så en celle længst til venstre ikke har nogen nabo til venstre - eller om det skal være på en kugle-overflade, så en celle længst til venstre har cellen længst til højre i samme række som sin nabo til venstre.
- Du bestemmer selv hvor mange levende celler du vil placere i starten.
- Du bestemmer også selv frekvensen - hvor hurtigt generationer skal skifte.
- Og du bestemmer selvfølgelig 100% selv hvordan det visuelle skal se ud.

# Frivillige udvidelser

Det er kun et krav at dit program skal vise generationerne skifte, men du er mere end velkommen til at udvide det med ekstra funktionalitet. Her er nogle forslag du kan vælge mellem - de er af stigende sværhedsgrad, så tænk dig godt om, før du vælger en langt nede på listen:

## Animationer

Tilføj animationer på når en celle fødes eller dør - brug CSS til at få en celle til at fade frem, eller at vokse sig stor, eller noget helt tredje. Vær kreativ. Husk at du ikke behøver ændre noget i JavaScripten - hvis en celle vises som levende ved at få tilføjet en klasse (og død ved at fjerne selvsamme) så kan det gøres så simpelt som at have en CSS animation i den klasse.

## Manuelle tilføjelser

Gør det muligt at “tegne” i grid’et, og tilføje eller fjerne levende celler. Lav en enkel click-event-listener der reagerer på hele grid’et, finder ud af hvilken celle der var klikket på (find for eksempel dens index i en querySelectorAll) og skift dens tilstand i modellen fra død til levende - eller omvendt.

## Pause og single stepping

Ud over at generationer skifter automatisk, så tilføj en pause-knap der kan standse en generation, og en single-step knap der viser næste generation, men fortsætter med at være pauset.

## Justering af hastighed

Lav input til at justere hvor hurtigt generationer skifter - når de ikke er pauset - brug for eksempel en [<input type=”range”>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range) for at gøre det lidt lækkert i brugerfladen.

## Save og load

Gør det muligt at “gemme” den nuværende generations status. I JavaScript kan man ikke umiddelbart gemme en fil, men du kan fake det ved at skrive den ud i konsollen, eller i et `<textarea>` som brugeren så skal kopiere fra, og selv gemme i en rigtig fil.

Gør det tilsvarende muligt at loade et grid ind, som man tidligere har savet.

Du kan gøre det forholdsvis simpelt, ved at [stringify’e](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) modellen, men det kan også gøres ret fancy hvis du opfinder en tredje repræsentation, et alternativt view om man vil, som modellen kan konverteres til og fra.

## Tilføj “Patterns”

Der er lang række faste, kendte mønstre til Game of Life - for eksempel en “Blinker” der er tre levende celler på række, som så skifter til tre levende celler i en kolonne, og tilbage igen. Eller en “Glider” som er en fast sekvens af mønstre der rejser - glider - ned gemmen grid’et.

Se [https://en.wikipedia.org/wiki/Conway's_Game_of_Life#Examples_of_patterns](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life#Examples_of_patterns) for flere eksempler.

Tilføj en mulighed for at brugeren kan “tegne” sådan nogle patterns på en nem (for brugeren) måde. For eksempel kunne man vælge et pattern fra en menu, og så klikke et sted i grid’et, og det pattern ville opstå der hvor man klikker.

Brug små “mini-modeller” til at gemme patterns. For eksempel et 5x5 grid til en Blinker. Og omregn så disse mini-modeller til at passe i den rigtige model.

