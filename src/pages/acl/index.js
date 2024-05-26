// ** React Imports
import { useContext, useState } from 'react'
import sha256 from 'crypto-js/sha256'

// ** Context Imports
import { AbilityContext } from 'src/layouts/components/acl/Can'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { Button } from '@mui/material'
import axios from 'axios'
import { useRouter } from 'next/router'

const ACLPage = () => {
  // ** Hooks
  const ability = useContext(AbilityContext)
  const router = useRouter()

  const [response, setResponse] = useState(null)

  const handleAPICall = async () => {
    const payload =
      // {
      //   merchantId: 'GHAREONLINE',
      //   merchantTransactionId: 'MT180420241921',
      //   merchantUserId: 'MUID123',
      //   amount: 10,
      //   redirectUrl: 'https://www.mkgharejewellers.com/validatepayment/10',
      //   redirectMode: 'REDIRECT',
      //   callbackUrl: 'https://mkgharejewellers.mkghare.com/api/Orders/phonepe/callback',
      //   mobileNumber: '9866731854',
      //   paymentInstrument: {
      //     type: 'PAY_PAGE'
      //   }
      // }

      {
        merchantId: 'PGTESTPAYUAT',
        merchantTransactionId: 'MT7850590068188104',
        merchantUserId: 'MUID123',
        amount: 10000,
        redirectUrl: 'https://www.mkgharejewellers.com/validatepayment/10',
        redirectMode: 'REDIRECT',
        callbackUrl: 'https://mkgharejewellers.mkghare.com/api/Orders/phonepe/callback',
        mobileNumber: '9999999999',
        paymentInstrument: {
          type: 'PAY_PAGE'
        }
      }

    const base64Payload = Buffer.from(JSON.stringify(payload)).toString('base64')

    // Calculate X-Verify header
    const saltKey = '099eb0cd-02cf-4e2a-8aca-3e6c6aff0399'
    const saltIndex = 1
    const string = base64Payload + '/pg/v1/pay' + saltKey
    const xVerify = sha256(base64Payload + '/pg/v1/pay' + saltKey).toString() + '###' + saltIndex

    const options = {
      method: 'post',
      url: 'https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay',
      headers: {
        'Content-Type': 'application/json',
        'X-VERIFY': xVerify
      },
      data: {
        request: base64Payload

        // 'ewogICJtZXJjaGFudElkIjogIlBHVEVTVFBBWVVBVCIsCiAgIm1lcmNoYW50VHJhbnNhY3Rpb25JZCI6ICJNVDc4NTA1OTAwNjgxODgxMDQiLAogICJtZXJjaGFudFVzZXJJZCI6ICJNVUlEMTIzIiwKICAiYW1vdW50IjogMTAwMDAsCiAgInJlZGlyZWN0VXJsIjogImh0dHBzOi8vd2ViaG9vay5zaXRlL3JlZGlyZWN0LXVybCIsCiAgInJlZGlyZWN0TW9kZSI6ICJSRURJUkVDVCIsCiAgImNhbGxiYWNrVXJsIjogImh0dHBzOi8vd2ViaG9vay5zaXRlL2NhbGxiYWNrLXVybCIsCiAgIm1vYmlsZU51bWJlciI6ICI5OTk5OTk5OTk5IiwKICAicGF5bWVudEluc3RydW1lbnQiOiB7CiAgICAidHlwZSI6ICJQQVlfUEFHRSIKICB9Cn0='
      }
    }

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data.data.instrumentResponse.redirectInfo.url)

        // router.push(response.data.data.instrumentResponse.redirectInfo.url)
        const redirectUrl = response.data.data.instrumentResponse.redirectInfo.url
        window.open(redirectUrl, '_blank')
      })
      .catch(function (error) {
        console.error(error)
      })
  }

  const handleAPICall2 = async () => {
    // Make API call
    try {
      const payload = {
        merchantId: 'PGTESTPAYUAT',
        merchantTransactionId: 'MT7850590068188104',
        merchantUserId: 'MUID123',
        amount: 10000,
        redirectUrl: 'https://webhook.site/redirect-url',
        redirectMode: 'REDIRECT',
        callbackUrl: 'https://webhook.site/callback-url',
        mobileNumber: '9999999999',
        paymentInstrument: {
          type: 'PAY_PAGE'
        }
      }

      // Convert payload to Base64
      const base64Payload = Buffer.from(JSON.stringify(payload)).toString('base64')

      // Calculate X-Verify header
      const saltKey = '099eb0cd-02cf-4e2a-8aca-3e6c6aff0399'
      const saltIndex = 1
      const string = base64Payload + '/pg/v1/pay' + saltKey
      const xVerify = sha256(base64Payload + '/pg/v1/pay' + saltKey).toString() + '###' + saltIndex

      console.log('X-VERIFY header:', xVerify)

      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-VERIFY': xVerify // Use the calculated X-VERIFY header
        },
        body: JSON.stringify(payload)
      }

      const response = await fetch('https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay', options)

      if (!response.ok) {
        throw new Error('Network response was not ok')
      }

      const responseData = await response.json()
      console.log(responseData)
    } catch (error) {
      console.error(error)
    }
  }

  const handleAPICall1 = async () => {
    const payload = {
      merchantId: 'GHAREONLINE',
      merchantTransactionId: 'MT7850590068188104',
      merchantUserId: 'MUID123',
      amount: 10000,
      redirectUrl: 'https://webhook.site/redirect-url',
      redirectMode: 'REDIRECT',
      callbackUrl: 'https://webhook.site/callback-url',
      mobileNumber: '9999999999',
      paymentInstrument: {
        type: 'PAY_PAGE'
      }
    }

    // Convert payload to Base64
    const base64Payload = Buffer.from(JSON.stringify(payload)).toString('base64')

    // Calculate X-Verify header
    const saltKey = 'cdca9558-eb96-46c7-bed3-f96abfdd044d'
    const saltIndex = 1
    const string = base64Payload + '/pg/v1/pay' + saltKey

    // const sha = crypto.createHash('sha256').update(string).digest('hex')
    // const checksum = sha + '###' + saltIndex
    const xVerify = sha256(base64Payload + '/pg/v1/pay' + saltKey).toString() + '###' + saltIndex

    const sha1 = sha256(string).toString()
    const checksum1 = sha1 + '###' + saltIndex
    console.log('checksum ', checksum1)

    // Make API call
    try {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-VERIFY': 'd7a8e4458caa6fcd781166bbdc85fec76740c18cb9baa9a4c48cf2387d554180###1'
        },
        body: JSON.stringify({
          merchantId: 'GHAREONLINE',
          merchantTransactionId: 'MT7850590068188104',
          merchantUserId: 'MUID123',
          amount: 10000,
          redirectUrl: 'https://webhook.site/redirect-url',
          redirectMode: 'REDIRECT',
          callbackUrl: 'https://webhook.site/callback-url',
          mobileNumber: '9999999999',
          paymentInstrument: {
            type: 'PAY_PAGE'
          }
        })
      }

      fetch('https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay', options)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok')
          }

          return response.json()
        })
        .then(response => console.log(response))
        .catch(err => console.error(err))

      // const response = await axios.post(
      //   'https://api.phonepe.com/apis/hermes/pg/v1/pay',
      //   {
      //     request: base64Payload
      //   },
      //   {
      //     headers: {
      //       'Content-Type': 'application/json',
      //       'X-VERIFY': checksum1
      //     }
      //   }
      // )
      // console.l/og(response.data)

      // setResponse(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Grid container spacing={6}>
      {/* <Button onClick={handleAPICall}>Make API Call</Button> */}
      <Grid item md={6} xs={12}>
        <Card>
          <CardHeader title='Common' />
          <CardContent>
            <Typography sx={{ mb: 4 }}>No ability is required to view this card</Typography>
            <Typography sx={{ color: 'primary.main' }}>This card is visible to 'user' and 'admin' both</Typography>
          </CardContent>
        </Card>
      </Grid>
      {ability?.can('read', 'analytics') ? (
        <Grid item md={6} xs={12}>
          <Card>
            <CardHeader title='Analytics' />
            <CardContent>
              <Typography sx={{ mb: 4 }}>User with 'Analytics' subject's 'Read' ability can view this card</Typography>
              <Typography sx={{ color: 'error.main' }}>This card is visible to 'admin' only</Typography>
            </CardContent>
          </Card>
        </Grid>
      ) : null}
    </Grid>
  )
}
ACLPage.acl = {
  action: 'read',
  subject: 'acl-page'
}

export default ACLPage
