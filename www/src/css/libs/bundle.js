.simplebar, [data-simplebar-direction] {
    position: relative;
    overflow: hidden;
    -webkit-overflow-scrolling: touch; /* Trigger native scrolling for mobile, if not supported, plugin is used. */
}

.simplebar .simplebar-scroll-content,
[data-simplebar-direction] .simplebar-scroll-content {
    overflow-y: scroll;
    overflow-x: auto;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    -ms-overflow-style: none; /* hide browser scrollbar on IE10+ */
}

/* hide browser scrollbar on Webkit (Safari & Chrome) */
.simplebar-scroll-content::-webkit-scrollbar {
    display: none;
}

[data-simplebar-direction="horizontal"] .simplebar-scroll-content,
.simplebar.horizontal .simplebar-scroll-content {
    overflow-x: scroll;
    overflow-y: auto;
}

.simplebar-track {
    z-index: 99;
    position: absolute;
    top: 9px;
    right: 5px;
    bottom: 9px;
    width: 11px;
}

.simplebar-track .simplebar-scrollbar {
    position: absolute;
    right: 2px;
    -webkit-border-radius: 7px;
    -moz-border-radius: 7px;
    border-radius: 7px;
    min-height: 10px;
    width: 7px;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
    opacity: 0;
    -webkit-transition: opacity 0.2s linear;
    -moz-transition: opacity 0.2s linear;
    -o-transition: opacity 0.2s linear;
    -ms-transition: opacity 0.2s linear;
    transition: opacity 0.2s linear;
    background: #C4C4C5;
    -webkit-background-clip: padding-box;
    -moz-background-clip: padding;
}

.simplebar-track:hover .simplebar-scrollbar {
    /* When hovered, remove all transitions from drag handle */
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=70)";
    opacity: 0.7;
    -webkit-transition: opacity 0 linear;
    -moz-transition: opacity 0 linear;
    -o-transition: opacity 0 linear;
    -ms-transition: opacity 0 linear;
    transition: opacity 0 linear;
}

.simplebar-track .simplebar-scrollbar.visible {
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=70)";
    opacity: 0.7;
}

[data-simplebar-direction="horizontal"] .simplebar-track,
.simplebar.horizontal .simplebar-track {
    top: auto;
    left: 0;
    width: auto;
    height: 11px;
}

[data-simplebar-direction="horizontal"] .simplebar-track .simplebar-scrollbar,
.simplebar.horizontal .simplebar-track .simplebar-scrollbar {
    right: auto;
    top: 2px;
    height: 7px;
    min-height: 0;
    min-width: 10px;
    width: auto;
}
