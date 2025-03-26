import { execSync } from 'child_process';
import dotenv  from 'dotenv';

function set_env(omgeving) {
    if (omgeving === 'on') {
        const command = 'echo virtuoso_rw_username="bodemenondergrond_rw" > .env && echo virtuoso_rw_password="bodemenondergrond_rw_password_ontwikkel" >> .env'
        execSync(command);
    } else if (omgeving === 'oe') {
        const command = 'echo virtuoso_rw_username="bodemenondergrond_rw" > .env && echo virtuoso_rw_password="VZh0FLUGJJE7rcZwc4XGEuNptRVDbinh" >> .env'
        execSync(command);
    }
    dotenv.config();
    console.log(process.env.virtuoso_rw_username + ':' + process.env.virtuoso_rw_password)
}

export { set_env };
