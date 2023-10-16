// შექმენი <button> და <div> ელემენტები და
// მიანიჭეთ საკუთარი უნიკალური id
// ● <div> - ში ჩაწერე პატარა random ტექსტი
// ● ღილაკზე დაჭერის შემთხვევაში დამალე
// <div> ელემენტი

const para=document.createElement('div')
para.innerText='This is a first task'
para.setAttribute('id','para-1')
document.body.appendChild(para)

const btn=document.createElement('button')
btn.setAttribute('id','btn-1')
btn.innerText = 'Click me!';
document.body.appendChild(btn)

const onButtonClick = () => {
    para.style.display = 'none'
    console.log('button clicked')
}

btn.addEventListener('click', onButtonClick);


// ● შექმენი შემდეგი სტრუქტურა JS -ის
// გამოყენებით და დაამატე DOM-ში:
// <div id=”card”>
// <h2>Gandalf</h2>
// <a href=”#”>Go to profile</a>
// </div>


const div1=document.createElement('div')
div1.innerText='This is a second task'
div1.setAttribute('id','card')

const h2=document.createElement('h2')
h2.innerText='Gandalf'
div1.appendChild(h2)


const a=document.createElement('a')
a.innerText='Go to profile'
a.setAttribute('href','#')
div1.appendChild(a)

document.body.appendChild(div1)


// შექმენი quiz თამაში
// ● დაწერე რამდენიმე მოკლე შეკითხვა
// თავისი სავარაუდო პასუხებით
// ● სწორ პასუხზე დაჭერის შემთხვევაში
// გაამწვანე პასუხი
// ● არასწორი პასუხის შემთხვევაში გააწითლე



