class modelCategory{
    constructor(){
        this.name = '',
        this.icon = '',
        this.color = ''
    }

    setName(newName){
        this.name = newName;
    }

    setIcon(newIcon){
        this.icon = newIcon;
    }

    setColor(newColor){
        this.color = newColor;
    }

    getName(){
        return this.name;
    }

    getIcon(){
        return this.icon;
    }
    
    getColor(){
        return this.color;
    }


    save(){
        fetch('http://localhost:3000/category', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({name: this.name, icon: this.icon, color: this.color})
        })
        .then(result => result.json())
        .then(result2 => console.log(result2))
        .catch(err => console.error(err));
    }

    async init(){
        const categoriesList = await fetch('http://localhost:3000/categories')
            .then(result => result.json())
            .then( result2 => {return result2})
            .catch(err => console.error(err));
        
        return categoriesList
    }

}