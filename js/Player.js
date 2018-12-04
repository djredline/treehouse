class Player {
    constructor(name, id, color, active = false){
        this.name = name;
        this.id = id;
        this.color = color;
        this.active = active;
        this.tokens = this.createTokens(21);

    }

    /**
     * Creates token objects for player
     * @param {interger} num - Number of toke objects to be created
     * @return {array}   tokens - an array of new token objects
     */

    createTokens(num){
        const tokens = [];
        
        for(let i = 0; i < num; i++){
            let token = new Token(i, this);
            tokens.push(token);
        }

        return tokens;
    }

    /**
    * Check if a player has any undropped tokens left
    * @return {Boolean} 
    */

    checkTokens(){
          return this.unusedTokens.length == 0 ? false : true;
      }     

    /**
     * Gets all tokens that haven't been dropped.
     * @return {array}  Array of unused token.
     */

    get unusedTokens(){

        return this.tokens.filter(token => !token.dropped);
        
    }
    /**
     * Gets the active token by returning the first token in the array of unused tokens.
     * @return {Object} First token object in the array of ubused tokens.
     */

    get activeToken(){

        return this.unusedTokens[0];

    }
}