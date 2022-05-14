const adventurer = {
    name: 'Alice',
    cat: {
      name: 'Dinah',
      cat: {
          name: 'Mina',
          cat: {
            //   name: 'Veera',
              cat: {
                  name: 'Toro'
              }
          }
      }
    }
};

console.log(adventurer.cat?.cat?.cat?.name || 'Adventurer không có chú mèo nào');



    