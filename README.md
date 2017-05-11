

~~~bat
rem v1.2.1
rem by littleflute 2017.4.13 1:11am bjt
del index.html



@echo off
echo ^<!DOCTYPE html^>	>>index.html  
echo ^<html^> >>index.html 
echo ^<body^> >>index.html
echo %1 >>index.html
echo ^<br^> >>index.html
echo ^<div id="DivCurTime"^>^</div^> >>index.html
echo ^<br^> >>index.html
echo ^<button onclick="getCurTime()" type="button"^>Get current time position^</button^> >>index.html 

echo ^<button onclick="setCurTime(0)" type="button"^>00^</button^>^<br^> >>index.html  

echo ^<button onclick="moveMS(-0.05)" type="button"^>Time-50ms^</button^>  >>index.html
echo ^<button onclick="moveMS(-0.01)" type="button"^>-10ms^</button^>  >>index.html
echo ^<button onclick="moveMS(0.01)" type="button"^>+10ms^</button^>  >>index.html
echo ^<button onclick="moveMS(0.05)" type="button"^>+50ms^</button^>  >>index.html
echo ^<button onclick="setCurTime(5)" type="button"^>Set time position to 5 seconds^</button^>^<br^>   >>index.html

@echo on
setlocal ENABLEDELAYEDEXPANSION
call set /a x = 0
for /F %%a in ('dir /b *.mp4') do (
	rem echo %%a >>index.html
	if !x! == 10 (
		echo ^<br^> >>index.html
	)
	if !x! == 20 (
		echo ^<br^> >>index.html
	)
	if !x! == 30 (
		echo ^<br^> >>index.html
	)
	if !x! == 40 (
		echo ^<br^> >>index.html
	)
	call set /a x = !x! + 1
	echo ^<button onclick="play('%%a')"^>!x!:%%a^</button^> >>index.html
)


@echo off  
echo ^<br^> >>index.html
echo ^<video id="myVideo" width="720" height="480" controls^> >>index.html
echo  ^<source src="0.mp4" type="video/mp4"^>  >>index.html
echo Your browser does not support HTML5 video. >>index.html
echo ^</video^>  >>index.html
echo ^<script^>  >>index.html
echo var vid = document.getElementById("myVideo"); >>index.html

echo function play(i) {>>index.html
    
echo     vid.src=i; >>index.html
echo     vid.load();>>index.html
echo     vid.play(); >>index.html
echo }>>index.html
 

echo function getCurTime() {  >>index.html
echo    document.getElementById("DivCurTime").innerHTML= vid.currentTime; >>index.html
echo }   >>index.html
echo function setCurTime(t) {>>index.html 
echo    vid.currentTime=t;  >>index.html
echo    getCurTime();>>index.html
echo }  >>index.html
echo function moveMS(ms) {>>index.html 
echo   vid.currentTime+=ms;>>index.html
echo   getCurTime();  >>index.html
echo }   >>index.html
echo ^</script^> >>index.html
echo ^</body^> >>index.html

~~~





## Welcome to GitHub Pages

You can use the [editor on GitHub](https://github.com/littleflute/blbat/edit/master/README.md) to maintain and preview the content for your website in Markdown files.

Whenever you commit to this repository, GitHub Pages will run [Jekyll](https://jekyllrb.com/) to rebuild the pages in your site, from the content in your Markdown files.

### Markdown

Markdown is a lightweight and easy-to-use syntax for styling your writing. It includes conventions for

```markdown
Syntax highlighted code block

# Header 1
## Header 2
### Header 3

- Bulleted
- List

1. Numbered
2. List

**Bold** and _Italic_ and `Code` text

[Link](url) and ![Image](src)
```

For more details see [GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/).

### Jekyll Themes

Your Pages site will use the layout and styles from the Jekyll theme you have selected in your [repository settings](https://github.com/littleflute/blbat/settings). The name of this theme is saved in the Jekyll `_config.yml` configuration file.

### Support or Contact

Having trouble with Pages? Check out our [documentation](https://help.github.com/categories/github-pages-basics/) or [contact support](https://github.com/contact) and we’ll help you sort it out.
