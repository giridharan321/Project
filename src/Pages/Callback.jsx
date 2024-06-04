import React, { useState } from 'react'

export default function Callback() {

    const [count,setCount] = useState(0);
    const [light,setLight] = useState(false);

    
  return (
    <div style={theme}>
      <input type="text" value={Count} onChange= ((e) => setCount (parseInt(e.target.value)) />
      <button> </button>  
    </div>
  )
}
