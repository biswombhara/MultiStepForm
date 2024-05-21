export default function Math(){
    let Options = [
        {
            img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiiZYz5ZIYn730n9NR6mEbyK5U1z0edgE0ncmCa4FOr475sJGsdIUCIaTVC2E1dcPLc2rvmTT8NsScYFLaSZWckFIX8imS_9Xn6Anq0YERIzqZMtkoqZ5xMpPjkBPSOC0Z0CTE4WZyUD0TcRgoOnM3GnYXFCcyDAsgXETaKrB0lNS6R0j_UjGtLyj20Ylc/s375/93510.jpg",
            type:"Arithmatic",
            level:"Introductory",
            opt:1
        },
        {
            img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiAPQeoeyi1Ye9B9JuvZGm2yz8PxRfSOfcwQF4HLZgJruSw8cO8SksM6gk7TxLJRBeRstmqu7MAeH_fYjZ2OgtIlZQlBhDVxKE0dm_IMww8UIMdovxLLCtaNFu8jUjgzBrV4yH7KiY6gdC6tAQU52LVmCLRIZZl4E6azox2YRqQXlVtQbpUxMXbvOPnGjI/s379/0.jpg",
            type:"Basic Algebra",
            level:"Foundational",
            opt:2
        },
        {
            img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjNBAUjcWzgJrF_IxboiEI4DHIvuiD2prMvWx9PsZAB4CAfEq2VS1ALcgm_KifBfUsoC1uAKLMIixIKnA3ICoAfVA7YwjLc38e6U7zsikzt8mOS7f-JL5BXJxjVaai7ETb3cOi6VKQKC4e_ObpeyAOUiLlzjWnLwRi8YPdArOuuFZDbP7kPCewT8RiqZFU/s382/1.jpg",
            type:"Intermediate Algebra",
            level:"Intermediate",
            opt:3
        },
        {
            img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjaqOzjVnxmSlCp-kqX7iZ1PyY00O415iUQkTghSImJ-VTYRkjTqZ4QB7Cwcbk_puXWddfSyJEa5LnERyvFkgBFGjB7ayxMjpBR6eMQ5lN_eC8DzFW5qVsVzHwH6trhCkj1yF2TvcvscYgOv6DcVbmE-muag68GH5zjXHpCwaBgNybJP6PcLFmAlI-0H9I/s381/93512.jpg",
            type:"Calculus",
            level:"Advanced",
            opt:4
        },
    ]
    return (<div className="my-20 max-sm:my-8">
        <h1 className="text-3xl text-center font-bold max-sm:text-2xl">What is your math comfort level?</h1>
        <p className="text-center my-10 max-sm:my-5 text-lg max-sm:text-sm">
            Choose the highest level you feel confident in -you can always adjust later.
        </p>
        <div className="flex flex-wrap justify-center">
            { 
                Options.map((el) =>(
                    <div className="mathCard flex items-center">
                        <div className="flex flex-col items-center">                            
                            <img className="my-4" src={el.img}></img>
                            <h4 className={el.opt == 3?
                                "font-semibold mx-auto max-sm:scale-75 max-sm:text-xs":
                                "font-semibold mx-auto max-sm:scale-75"}
                            >{el.type}</h4>
                            <p className="text-xl text-slate-400 max-sm:scale-75">{el.level}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
)}