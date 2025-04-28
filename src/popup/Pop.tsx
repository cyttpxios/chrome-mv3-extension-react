import React from 'react';
import { Button, Select } from 'antd';
import { useTranslation, Trans } from 'react-i18next';
import './index.less';
const { Option } = Select;



const Pop = () => {


    const { t, i18n } = useTranslation();
    const [show, setShow] = React.useState(false);

    // 切换语言
    const handleLanguageChange = (value: string) => i18n.changeLanguage(value);


    return (

        <>

            <Select
                defaultValue={i18n.language}
                style={{ width: 60, height: 25 }}
                onChange={handleLanguageChange}
            >
                <Option value="en">En</Option>
                <Option value="zh">Zh</Option>
            </Select>
            <div style={{ marginTop: 100,display: 'flex', flexDirection: 'column', alignItems: 'center',justifyContent: 'center' }}>
                {
                    show && <div style={{ marginBottom: 20, fontSize: 20 }}>{t('dec')}</div>
                }

                <Button type='primary' onClick={() => { setShow(!show); }}>{t('click_me')}</Button>
            </div>

        </>


    )
}
export default Pop;