
console.log('\r\n <==== example ONE ====> \r\n')
let restaurant = {
    name: 'ASD',
    guestCapacity: 75,
    guestCount: 0,
    checkavailability: function (partySize) {
      console.log(this.guestCapacity)
      let seatLeft = this.guestCapacity - this.guestCount
      return partySize <= seatLeft
    } /* ^^ method ^^ */
  }
  
  
  let status = restaurant.checkavailability(4)
  
  console.log(status)
  
  //  Method is nothing more than an Object property whose value is a function
  // this --> references the Object, the method is undefined on




