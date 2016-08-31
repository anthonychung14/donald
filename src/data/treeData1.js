export const treeNull = {  
  name: "Donald Trump",
  partyline: "Republican",
  favoriteSong: "Party like it's 1999",
  favoriteColor: "Hair",
  children: []    
}

export const treeData1 = {  
  id: 1,
  name: "Donald Trump",
  partyline: "Republican",
  children: [
    { 
      id: 2,
      name: "Donald the First", 
      eyeColor: "Blue",
      children: [
        { 
          id: 3,
          name: "Grandchild Donald",
          favoriteColor: "black",
          favoriteFood: "burritos",
          children: [
            {
              id: 4,
              name: "Great Grandchild Donald",
              children: [
                {  
                  id: 5,
                  name: "Offspring1",
                  partyline: "Republican",
                  favoriteSong: "Party like it's 1999",
                  favoriteColor: "Hair",
                  children: []    
                },
                {  
                  id: 6,
                  name: "Offspring2",
                  partyline: "Republican",
                  favoriteSong: "Party like it's 1999",
                  favoriteColor: "Hair",
                  children: []    
                },
                {  
                  id: 7,
                  name: "OffSpring3",
                  partyline: "Republican",
                  favoriteSong: "Party like it's 1999",
                  favoriteColor: "Hair",
                  children: []    
                }
              ]
            }
        ] 
        }
      ]
    },
    { 
      id: 8,
      name: "Donald the Second", 
      children: [] 
    },
    { 
      id: 9,
      name: "Donald the Third", 
      children: [] 
    },
  ]      
}