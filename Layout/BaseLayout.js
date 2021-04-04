import React from 'react'
import Link from 'next/link'
function BaseLayout(props){

    return(
        <div>
            <style jsx>{
             `
             ul{
             display:flex
             }
             li{
             margin-left:20px;
             overflow:hidden;
             }
             `
            }

            </style>
            <ul >
                <li><Link href="/"> Home </Link> </li>
                <li><Link href="/todos"> Todos </Link> </li>
                <li><Link href="/about"> About </Link> </li>
                <li><Link href="/contact"> Contact </Link> </li>
            </ul>

            {props.children}



        </div>
    )
}export default BaseLayout
