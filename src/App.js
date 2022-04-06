import React, { useState } from 'react'


/* 🍀 js0505
  준비: 
  1. input value ->setHardNumber

  2.  hardCalculate(hardNumber)함수 실행

  3. hardNumber + 10000 ...return

  4. return 된 hardCalculate함수 결과물을 데이터바인딩
*/

const hardCalculate =(p_number)=>{

  console.log("hard cal")

  for (let i = 0; i < 987654321; i++) {  /*  */  }   //delay time

  return p_number + 1000;

}

/* 🍀 js0510
  const hardNumber가 재설정될때마다 App()이 재렌더링되고있음
*/
const easyCalculate =(p_number)=>{

  console.log('easy cal')
  return p_number +1;

}

function App() {

  // js0505
  const [hardNumber, sethardNumber] = useState(1)  
  const hardSum = hardCalculate(hardNumber);
  
  
  // js0510
  const [easyNumber, setEDasyNumber] = useState(1)
  const easySum = easyCalculate(easyNumber);


  return (
    <div>
      <section>
        <h3> hard calculate</h3>
        
        <input type="number"  value={hardNumber} onChange={(e)=> sethardNumber(e.target.value)}/>

        <span> +10000 = {hardSum}</span>
      </section>

      <section>
        <h3> easy calculate</h3>

        <input type="number"  value={easyNumber} onChange={(e)=> sethardNumber(e.target.value)}/>

        <span> +10000 = {easySum}</span>
      </section>
    
    
    </div>
  );
}

export default App;
