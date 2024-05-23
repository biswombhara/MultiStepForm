export default function Profession(){
    let checkBox = [
        {
            img:"https://cdn4.iconfinder.com/data/icons/professions-bzzricon-flat/512/25_Student-512.png",
            text:"Student or soon to be enrolled",
            id:"one"
        },
        {
            img:"https://t3.ftcdn.net/jpg/06/17/13/26/240_F_617132669_YptvM7fIuczaUbYYpMe3VTLimwZwzlWf.jpg",
            text:"This will help us get you personalize your experience.",
            id:"two"
        },
        {
            img:"https://nofiredrills.com/wp-content/uploads/2016/10/myavatar.png",
            text:"Parent of a school-age child",
            id:"three"
        },
        {
            img:"https://static.vecteezy.com/system/resources/previews/021/770/056/non_2x/avatar-of-a-student-character-free-vector.jpg",
            text:"Lifelong learner",
            id:"four"
        },
        {
            img:"https://png.pngtree.com/png-clipart/20190705/original/pngtree-man-avatar-icon-professional-man-character-png-image_4356027.jpg",
            text:"Teacher",
            id:"five"
        },
        {
            img:"https://i.pinimg.com/originals/cf/ad/6f/cfad6f938af0aec9c9cb4b3214dea18b.jpg",
            text:"other",
            id:"six"
        },
    ]
    return <>
        <h1 className="text-3xl text-center max-sm:text-2xl"><b>Which describes you best?</b></h1>
        <p className="my-4 max-sm:text-center max-sm:text-sm"></p>
        <form className="max-sm:my-[-0.8rem]">
            {
                checkBox.map((el)=>(
                    <div className="check-box">
                        <img className="list-icon" src={el.img}></img>
                        <input type="radio" className="hidden" id={el.id} name="experience" />
                        <label for={el.id}>{el.text}</label>
                    </div>
                ))
            }
        </form>
    </>
}