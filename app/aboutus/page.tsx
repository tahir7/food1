import { Container, Heading } from '@radix-ui/themes'
import React from 'react'

const aboutus = () => {
    return (
        <Container>

            <div
                className="pt-3"
                style={{ color: "#A94D25" }}

            >
                <Heading as="h2" mt="4"> Software used </Heading>
                <ul className='mx-6 mt-4'
               
               style={{

                    lineHeight: 2,
                    // letterSpacing: 1
                    justifyContent: "end",
      
                    color: "#674D41"
                  }}
                >
                    <li> Next js 15 </li>
                    <li> Typescript </li>
                    <li> Tailwind and Redix</li>
                </ul>
            </div>


        </Container>
    )
}

export default aboutus