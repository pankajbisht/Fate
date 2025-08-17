const EditorTemplate = ({
    header,
    leftSidebar,
    undoRedoSidebar,
    canvasBoard,
    rightSidebar,
    footer
  }) => {
    return (
      <div className="flex flex-col w-full h-screen bg-stone-300">

        {/* Header */}
        {header && (
          <div className="flex-none">
            {header}
          </div>
        )}

        {/* Main Content */}
        <div className="flex flex-1 overflow-hidden">
          {/* Left Sidebar */}
          {leftSidebar && (
            <div className="flex-none">
              {leftSidebar}
            </div>
          )}

          {undoRedoSidebar && (
            <div className="flex-none">
              {undoRedoSidebar}
            </div>
          )}

          {/* Canvas - Centered */}
          <div className="flex-1 flex justify-center items-center">
            {canvasBoard}
          </div>

          {/* Right Sidebar */}
          {rightSidebar && (
            <div className="flex-none">
              {rightSidebar}
            </div>
          )}
        </div>

        {/* Footer */}
        {footer && (
          <div className="flex-none">
            {footer}
          </div>
        )}

      </div>
    );
  };

export default EditorTemplate;