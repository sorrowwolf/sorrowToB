import { Module } from "vuex";
import { v4 as uuidv4 } from 'uuid';
import { GlobalDataProps } from "./index";

export interface EditorProps {
  // 供中间编辑器渲染的数组
  components: ComponentData[];
  // 当前编辑的是哪个元素, uuid
  currentElement: string;
}

interface ComponentData {
  // 这个元素的属性，属性详情见下面
  props: {
    [key: string]: any;
  };
  // id，uuid v4 生成
  id: string;
  name: string;
}

export const testComponents: ComponentData[] = [
  { id: uuidv4(), name: 'l-text', props: { text: 'hello', fontSize: '20px', color: '#000000', 'lineHeight': '1', textAlign: 'left', fontFamily: '' }},
  { id: uuidv4(), name: 'l-text', props: { text: 'hello2', fontSize: '10px', fontWeight: 'bold', 'lineHeight': '2', textAlign: 'left', fontFamily: '' }},
  { id: uuidv4(), name: 'l-text', props: { text: 'hello3', fontSize: '15px', actionType: 'url', url: 'https://www.baidu.com', 'lineHeight': '3', textAlign: 'left', fontFamily: '' }}
];

const editor: Module<EditorProps, GlobalDataProps> = {
  state: {
    components: testComponents,
    currentElement: ''
  },
};

export default editor;