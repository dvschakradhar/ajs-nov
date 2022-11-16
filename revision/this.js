let india = {
    name: 'Ram',
    getCitizenship: function() {
        console.log("I belong to ", this);
        function globalCitizen(){
            console.log("I dont belong to anyone. So, I am a global citizen", this);
        }
        globalCitizen();

        let migrant = () => {
           console.log("I belong to the country where I am written. I belong to ",this); 
        }
        migrant();
        return this.name;
    }
}

console.log(india.getCitizenship());