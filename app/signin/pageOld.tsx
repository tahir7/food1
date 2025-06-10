import { Avatar, Box, Card, Flex, Text } from '@radix-ui/themes'
import { Button } from '@radix-ui/themes/components/button'
import Link from 'next/link'
import React from 'react'
import googleImage from "../signin/googlelogo.png"
import Image from 'next/image';
import { signIn } from 'next-auth/react'

const login = () => {
  return (
    <div>


        <form   action= {async () => {

            // "user server"
            await signIn("google")
            
        }
    } >

    <Button type='submit'> Google </Button>
    </form>

    <h2>Welcome Dear Guest!</h2>

    <h3>Please login using your Google Credentials </h3><br></br>

    <Button>

        <div className="max-w-sm rounded overflow-hidden shadow-lg  relative  w-full h-50 px-1 py-1">
            <Image src={googleImage} alt='Google signin' 
            
            // fill={true} // Use fill property for the image to fill the container
            objectFit="cover" // Control cropping and scaling
            // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            width={250}
            height={200}
            className="object-cover rounded-lg px-2" // Apply rounded corners using Tailwind
            /> 
        </div>

        <Link href="https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?client_id=409462012672-kbre6h8qkpag6340o0fpc3pi07tdo8v7.apps.googleusercontent.com&scope=openid%20email%20profile&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fapi%2Fauth%2Fcallback%2Fgoogle&state=1r6SEd3xWHB6ar3eG2Lw7r3HRhLzSyCfdKtb5xGPwFc&code_challenge=4IG1oAdHglFSG2sG9GBhU_PbvqNQBOTellBDg0UGnYw&code_challenge_method=S256&service=lso&o2v=2&flowName=GeneralOAuthFlow">
      
                 Loging through Google
        </Link>
       
    </Button>



    <Box maxWidth="240px">
	<Card>

    <div className="max-w-sm rounded overflow-hidden shadow-lg  relative  w-full h-50 px-1 py-1 align-middle" >
            <Image src={googleImage} alt='Google signin' 
            
            // fill={true} // Use fill property for the image to fill the container
            objectFit="cover" // Control cropping and scaling
            // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            width={250}
            height={200}
            className="object-cover rounded-lg px-2" // Apply rounded corners using Tailwind
            /> 
        </div>

		<Flex gap="3" align="center">
       

			<Box>
				<Text as="div" size="2" weight="bold">
                Welcome Dear Guest!
				</Text>
				<Text as="div" size="2" color="gray">
                Please login using your Google Credentials
				</Text>
			</Box>
		</Flex>
	</Card>
</Box>


</div>
  )
}

export default login