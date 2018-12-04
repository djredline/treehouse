class Board {
    constructor(){
        this.rows = 6;
        this.columns = 7;
        this.spaces = this.createSpaces();
    } 

/**
 * Generates 2D array of spaces.
 * @return {array}   An array of space objects
 */
    createSpaces(){
        const spaces = [];

        for(let i = 0; i < this.columns; i++){
            const col = [];
            for(let j =0; j < this.rows; j++ ){
              const space = new Space(i, j);
              col.push(space);  
            }

            spaces.push(col);
        } 

        return spaces;
    } 

    drawHTMLBoard(){
    
        for(let column of this.spaces ){
            for(let space of column){
            space.drawSVGSpace();
            }
        }
    }

  


}