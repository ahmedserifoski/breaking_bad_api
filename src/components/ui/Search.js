

import { getByText } from '@testing-library/react'
// import React, {useState} from 'react'

// const Search = ({getQuery}) => {
//     const [text, setText] = useState("")
//     const onSomeChange = (q) => {
//         setText(q)
//         getQuery(q)
//     }
//     return (
//         <section className="search">
//             <form>
//                 <input 
//                     type="text"
//                     className="form-cntrol"
//                     placeholder="Search characters"
//                     value={text}
//                     onChange={event => onSomeChange(event.target.value)}
//                     autoFocus
//                 />
//             </form>
//         </section>
//     )
// }

// export default Search

import React, {useState} from 'react'


const Search = ({getQuery}) => {

    const [text, setText] = useState("")
    const onAnyChange = (q) => {
        setText(q) 
        getQuery(q)
    }

    return (
        <section className="search">
            <form>
                <input 
                    type="text"
                    className="form-control"
                    value={text}
                    onChange={e => onAnyChange(e.target.value)}
                    placeholder="Search characters"
                    autoFocus
                />
            </form>
            
        </section>
    )
}

export default Search
