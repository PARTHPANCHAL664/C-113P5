function preload()
{     }

function setup()
{
    canvas = createCanvas(650,480)
    canvas.position(120,250)
    Video = createCapture(VIDEO)
    Video.hide();

    tint_color = ""
}

function draw()
{
    image(Video,0,0,640,480);
    tint(tint_color)
}
function take_snapshot()
{
    save('Filter_Image(C-113).png')
}

function apply_filter()
{
    tint_color = document.getElementById('color_added').value;
}