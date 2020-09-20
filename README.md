# node_knowledge-control
School assignment, Node.js

Skapa en webbserver som ger respons för en publik (http://localhost:3000) respektive en privat URL(http://localhost:3000/secret?key=ALBATROSS).

I den publika delen visas information som läses in från en textfil (public.txt), och i den privata delen (som ”skyddas” genom en kodnyckel i querystringen) ska ”inloggade” kunna se webbsidan secret.html

Din inlämning ska innehålla filerna:

    index.js
    public.txt
    secret.html

Betyg som ges: IG/G. 

För G krävs  

    att applikationen använder lämpliga moduler 
    att obehöriga inte kommer åt den privata delen 
    att variabelnamn och liknande har en konsekvent och lättförståelig namngivning 
