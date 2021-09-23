// registerSettingsPage(({ settings: { myProp } }) => (
//     <Page>
//         <Section title="Settings">{myProp && <Text>{myProp}</Text>}</Section>
//     </Page>
// ));
// function HelloWorld(props) {
//     return (
//       <Page>
//         <Section
//           title={<Text bold align="center">Demo Settings</Text>}>
//           <Toggle
//             settingsKey="toggle"
//             label="Toggle Switch"
//           />
//           <ColorSelect
//             settingsKey="color"
//             colors={[
//               {color: 'tomato'},
//               {color: 'sandybrown'},
//               {color: 'gold'},
//               {color: 'aquamarine'},
//               {color: 'deepskyblue'},
//               {color: 'plum'}
//             ]}
//           />
//         </Section>
//       </Page>
//     );
//   }
//   
//   registerSettingsPage(HelloWorld);

let themes = [
    ['blue', 'red', 'yellow'],
    ['grey', 'white', 'orange']
];
    
//EXAMPLE
  function Colors(props) {
    return (
      <Page>
        <Section
          title={<Text bold align="center">Color Settings</Text>}>
          <ColorSelect
            settingsKey="myColor"
            
            colors={[
              {color: 'tomato', value: themes[0][0]},
              {color: 'sandybrown', value: themes[1][0]},
              {color: 'gold'},
              {color: 'aquamarine'},
              {color: 'deepskyblue'},
              {color: 'plum'}
            ]}
          />
        </Section>
      </Page>
    );
  }
  
  registerSettingsPage(Colors);
  
 
  function ListItem(props) {
    // Correct! There is no need to specify the key here:
    return <li>{props.value}</li>;
  }
  
  
  
 //TODO check this
  
//   function NumberList(props) {
//     const numbers = props.numbers;
//     const listItems = numbers.map((number) =>
//       // Correct! Key should be specified inside the array.
//       <ListItem key={number.toString()} value={number} />
//     );
//     return (
//       <ul>
//         {listItems}
//       </ul>
//     );
//   }
//   
//   const numbers = [1, 2, 3, 4, 5];
//   console.log(JSON.stringify(<NumberList numbers={numbers}/>),
//     );

function ColorList(props) {
    const myColors = props.cols;
    const listItems = cols.map((col) =>
      // Correct! Key should be specified inside the array.
      <ListItem key={col} value={col} />
    );
    return (
      <ul>
        {listItems}
      </ul>
    );
  }
  
  const cols = ['red','blue','green'];
  console.log(JSON.stringify(<ColorList cols={cols}/>),
    );
   
