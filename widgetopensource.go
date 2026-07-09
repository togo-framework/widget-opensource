// Package widgetopensource is the "Open source" DRIVER — Top open-source repos with live GitHub stats.
//
// It self-registers into the widget base plugin on import. Install by blank-import:
//
//	import _ "github.com/togo-framework/widget-opensource"
package widgetopensource

import "github.com/togo-framework/widget"

func init() {
	widget.Register(widget.Descriptor{
		Key:         "opensource",
		Title:       "Open source",
		DefaultZone: "body",
		Asset:       "/widgets/opensource.js",
	})
}
