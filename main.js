let text = document.getElementById('text');
let gateleft = document.getElementById('gate-left')
let gateright = document.getElementById('gate-right')

window.addEventListener('scroll',()=>{
    let value =window.scrollY;

    text.style.marginTop = value * 2.5 + 'px';
    gateleft.style.left = value * 0.5 + 'px';
   gateright.style.left = value * -0.5 + 'px'
})

/*Read more option on stories*/
 var story1 = document.getElementById("story1")
 var story2 = document.getElementById("story2")
 var story3 = document.getElementById("story3")
 var story4 = document.getElementById("story4")
 var story5 = document.getElementById("story5")

 story1.className = "story"
 story1.addEventListener('click',()=>{
  story1.innerText ="At first, she dismisses them as old house noises, but the whispers grow louder and more urgent. As Amelia investigates, she uncovers the manor’s dark history—each previous owner vanished mysteriously, and the whispers are the cries of their trapped souls. Soon, the house begins to turn against the couple, warping reality and bending their minds. Amelia must confront the malevolent force residing within the walls before it consumes them"
   story1.className= "story"
})

story2.className="story"
 story2.addEventListener('click',()=>{
  story2.innerText ="As the presence grows more sinister, Julia digs into the neighborhood's past and uncovers an unsolved murder involving a stalker who was never caught. The Midnight Watcher is back, and this time, he won’t stop until Julia becomes his next victim"
  story2.className="story"
})

story3.className="story"
 story3.addEventListener('click',()=>{
  story3.innerText ="Strange things start happening—faint voices, distant screams, and shadows moving where there should be none. They discover the asylum's last patients never left—they were locked in a secret underground ward, where horrific experiments took place. The souls of those forgotten patients haunt the asylum, and they’re looking to escape. As the friends are hunted one by one, they realize the only way out might be to finish what the asylum’s doctors started."
  story3.className= "story"
})

story4.className="story"
 story4.addEventListener('click',()=>{
  story4.innerText ="When a desperate search into her past reveals no birth records, the family grows suspicious. Soon, they discover that Lily isn't just a troubled child—she’s a vessel for something ancient and evil, something that has been searching for a new host for centuries. As the entity grows stronger, the family must make an impossible choice—keep Lily and risk their lives, or abandon her and unleash the horror onto someone else."
  story3.className= "story"
})

story5.className="story"
 story5.addEventListener('click',()=>{
  story5.innerText ="But curiosity drives them deeper into the city’s labyrinthine streets. Strange occurrences start to unfold—equipment malfunctions, hallucinations, and shadows moving in the water. When they lose contact with the surface, they realize they are not alone. Something ancient, powerful, and malevolent stirs beneath the city, awoken by their presence. Now, the team must race against time to escape the dark forces rising from the depths before they are consumed by the abyss."
  story5.className= "story"
})
// subscribe //
function button(){
  alert("Thanks for Subscribing us")
}

