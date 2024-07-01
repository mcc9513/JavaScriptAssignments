const storeOwners = [
    {
      name: 'Danny Shavez',
      stores: 1,
      location: "AZ",
    },
    {
      name: 'Danny Shavez',
      stores: 1,
      location: "NM",
    },
    {
      name: 'Danny Shavez',
      stores: 1,
      location: "NM",
    },
    {
      name: 'Danny Shavez',
      stores: 1,
      location: "NM",
    },
  ];
  
  const listNumberOfStores = function () {
    let totalLocations = 0;
    for (let i = 0; i < storeOwners.length; i++) {
    totalLocations += storeOwners[i].stores;
    }
    return totalLocations;
      // return i was changed to return total locations because the value storeOwners[i].stores is assigned to totalLocations 
  };
  
  let locations = listNumberOfStores();
// parenthisis were added to listNumberOfStores to assign the function to the variable "locations"
  
  function tellMeMyStores() {
    console.log('Hey, can you tell me how many stores you have?');
    if (locations > 0) {
      console.log('Of course, we have ' + locations + ' stores');
    }
  }
  
  function hasStore() {
    for (let i = 0; i < storeOwners.length; i++) {
      let person = storeOwners[i].name;
      let location = storeOwners[i].location;
        // [i] was added to storeOwners in both lines above to be sure that the for loop was referenced properly
      console.log('Yes, ' + person + ' has one in ' + location);
    }
      //curly brackets were removed from around the objects to ensure they were called as objects, if the curly brackets remained, a dollar sign would need to be added ex. ${person} and then the plus sign would not be necessary
  
  }
  
  tellMeMyStores();
  hasStore();
