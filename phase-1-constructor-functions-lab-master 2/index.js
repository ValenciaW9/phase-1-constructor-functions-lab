    function Scooter(year, color, model) {
        this.year = year;
        this.color = color;
        this.model =model;
    }

 function Driver(name, age, ecperience) {
     this.name = name;
     this.age = age;
     this.experience = ecperience;
 }

 function PickupLocation(address, city) {
     this.address = address;
     this.city = city;
 }
  let samson = new Scooter(2015, "red", "swoosh");
  let  allison = new Driver("Allison", "16 years", "Senver");
  let pickup = new PickupLocation("123 Broadway", "Denver");
