import React, { useState } from 'react';
import data from './projectdata';
import List from './List';
function App() {
 return (
   <main>
     <section className="container">
     <h3> Total {data.length} Projects Now </h3>
     <List projects={data}/>
   </section>
   </main>
 )
 
}

export default App;