class graph{

    constructor(){
        this.adjacentList = {};
        this.nodesCount = 0;
    }

    addNode(value){
        this.adjacentList[value]=[];
        this.nodesCount++;
    }
    addEdge(node1,node2){
        this.adjacentList[node1].push(node2);
        this.adjacentList[node2].push(node1);
    }

}

//    1--5--6---8
//       \ /   /
//        0---4 
            
const grafo = new graph();

grafo.addNode(0);
grafo.addNode(1);
grafo.addNode(4);
grafo.addNode(5);
grafo.addNode(6);
grafo.addNode(8);

grafo.addEdge(1,5);
grafo.addEdge(5,6);
grafo.addEdge(6,8);
grafo.addEdge(5,0);
grafo.addEdge(0,6);
grafo.addEdge(0,4);
grafo.addEdge(4,8);

console.log(grafo);