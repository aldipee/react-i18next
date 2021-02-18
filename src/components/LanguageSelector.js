import { Select } from 'antd';
import { useTranslation } from 'react-i18next';
const { Option } = Select;

function LanguageSelector() {
  const { i18n } = useTranslation();
  const handleChange = (data) => {
    const { value, key, label } = data;
    console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
    i18n.changeLanguage(value);
  };

  return (
    <div style={{ textAlign: 'right' }}>
      <Select
        labelInValue
        defaultValue={{ value: i18n.language }}
        style={{ width: 180, textAlign: 'left' }}
        onChange={handleChange}
      >
        <Option value='en'>🇺🇸 English</Option>
        <Option value='id'>🇮🇩 Bahasa Indonesia</Option>
      </Select>
    </div>
  );
}

export default LanguageSelector;
