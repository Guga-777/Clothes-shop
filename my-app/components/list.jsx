
import { useRouter } from "next/router";

    const DropdownChangeURL = () => {
      const router = useRouter();
    
      const handleChange = (event) => {
        const selectedValue = event.target.value;
    
        if (selectedValue) {
          // Update the URL dynamically
          router.push(selectedValue);
        }
      };
    
      return (
        <div>
          <label htmlFor="url-select">Choose a page: </label>
          <select id="url-select" onChange={handleChange}>
            <option value="">Select...</option>
            <option value="/page1">Page 1</option>
            <option value="/page2">Page 2</option>
            <option value="/page3">Page 3</option>
          </select>
        </div>
      );
    };
    
    export default DropdownChangeURL;

