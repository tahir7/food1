import { Button } from '@radix-ui/themes'
import Link from 'next/link'
import React from 'react'

const login = () => {
    return (
        <div>

            Welcome Dear Guest

            Please login using your Google Credentials

            <Button>

                <Link href="https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?client_id=409462012672-kbre6h8qkpag6340o0fpc3pi07tdo8v7.apps.googleusercontent.com&scope=openid%20email%20profile&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fapi%2Fauth%2Fcallback%2Fgoogle&state=1r6SEd3xWHB6ar3eG2Lw7r3HRhLzSyCfdKtb5xGPwFc&code_challenge=4IG1oAdHglFSG2sG9GBhU_PbvqNQBOTellBDg0UGnYw&code_challenge_method=S256&service=lso&o2v=2&flowName=GeneralOAuthFlow">
                    Loging through Google

                </Link>
            </Button>


        </div>
    )
}

export default login