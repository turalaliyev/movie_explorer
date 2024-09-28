import { Button } from "antd";
import {
  FacebookOutlined,
  InstagramOutlined,
  SendOutlined,
} from "@ant-design/icons";

const Header = () => {
  return (
    <div className="p-3 flex justify-between items-center bg-gradient-to-r from-red-600 via-red-700 to-red-800 w-full">
      <div className="text-3xl md:text-5xl font-bold text-white">
        Movie Explorer
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-2 items-center space-x-4">
        <div className="flex items-center space-x-4">
          <FacebookOutlined className="text-white text-2xl cursor-pointer hover:scale-110 transition-all ease-in-out" />
          <InstagramOutlined className="text-white text-2xl cursor-pointer hover:scale-110 transition-all ease-in-out" />
          <SendOutlined className="text-white text-2xl cursor-pointer hover:scale-110 transition-all ease-in-out" />
        </div>

        <div className="w-full">
          <Button
            type="primary"
            className="bg-white w-28 text-red-600 font-semibold hover:bg-red-500 hover:text-white"
          >
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
