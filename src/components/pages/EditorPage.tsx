import EditorTemplate from '../templates/EditorTemplate';
import { CanvasBoard } from '../organisms/CanvasBoard';
import { Header } from "../organisms/Header.tsx";
import { PanelManager } from "../organisms/PanelManager.tsx";
import { Footer } from "../organisms/Footer.tsx";
import { leftPanelConfig, rightPanelConfig } from "../config/panelConfig.tsx";
const EditorPage = () => {
  return <div>
    <EditorTemplate
      header={<Header />}
      leftSidebar={<PanelManager config={leftPanelConfig} toolbarPosition="left" />}
      rightSidebar={<PanelManager config={rightPanelConfig} toolbarPosition="right" />}
      // undoRedoSidebar={<PanelManager config={undoRedoPanelConfig} toolbarPosition="left" />}
      canvasBoard={<CanvasBoard />}
      footer={<Footer />}
    />
  </div>
}
export default EditorPage;
