import React, { useEffect, useState } from 'react'

const KONAMI = [38,38,40,40,37,39,37,39,66,65]

export default function EasterEgg(){
  const [unlocked,setUnlocked] = useState(false)
  useEffect(()=>{
    let pos = 0
    function handler(e){
      if(e.keyCode === KONAMI[pos]){ pos++
        if(pos === KONAMI.length) setUnlocked(true)
      } else pos = 0
    }
    window.addEventListener('keydown', handler)
    return ()=> window.removeEventListener('keydown', handler)
  },[])

  if(!unlocked) return null
  return (
    <div style={{position:'fixed',right:20,bottom:20,background:'var(--accent)',color:'#fff',padding:12,borderRadius:12}}>
      🎉 Debug Mode Unlocked — hidden lab revealed!
    </div>
  )
}
