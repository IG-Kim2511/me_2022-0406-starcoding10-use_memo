import React, { useMemo, useState } from 'react'


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

  ㅂ) 간단한 코드인데도 계산에 1초정도 걸림
 App component전체가 재렌더링 되면서 hardCalculate도 실행되기때문임..


*/
const easyCalculate =(p_number)=>{

  console.log('easy cal')
  return p_number +1;

}

function App() {

  // js0505
  const [hardNumber, sethardNumber] = useState(1)  

  // const hardSum = hardCalculate(hardNumber);
  
  /* 🍀 js0522

    10.
    useMemo() hook에 ... hardCalculate()함수..넣음

    [ ]안의 state가 바뀔때에만, 그 안의 코드 실행함, 

    (hardNumber이 바뀔때에만 hardCalculate()함수호출함, )

    그게 아니면 hardSum값 그대로 재사용함 

    (App 컴포넌트가 재렌더링되어도, 그대로 사용되어서 hardCalculate()함수를 호출안하고, 속도에 좋음)

    20. 
    App 컴포넌트가 재랜더링되어도, easyCalculate()함수만 실행되어서 속도가 빠른걸 확인할수있음
  
  */

    const hardSum = useMemo(() => {
      return hardCalculate(hardNumber);
    }, [hardNumber])



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
