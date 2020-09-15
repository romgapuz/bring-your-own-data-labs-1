import React from 'react'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import { borders } from '@material-ui/system'

export default function SplashPage() {
    return (
        <div>
            <Box border={1}>
                <h3>Welcome to BYOD Validation Tool</h3>
                <p>This tool will help you validate the corectness of your "Bring Your Own Data" for the workshop by doing the following checks
                <ul>
                    <li>Data size up to 3GB max</li>
                    <li>Check file type if CSV</li>
                    <li>Detect if there are any nested fields</li>
                    <li>Check headers</li>
                    <li>Potentially look for any PII data</li>
                </ul>
                </p>
                <p>
                    Undergoing Data Validation will also help you and your workshop conductors gain a better understanding of the types of data you have for a better workshop experience.
                </p>
                <p>
                    Now if you are ready please click <b>Proceed</b>
                </p>
                <Button variant="contained" color="primary">Proceed</Button>
            </Box>
        </div>
    )
}
