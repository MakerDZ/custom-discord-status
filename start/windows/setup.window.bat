@echo off

setlocal enabledelayedexpansion

REM Change the current directory to the folder where the .bat file is located
cd /d "%~dp0"

REM install typescript
call npm install -g typescript

REM install pnpm
call npm install -g pnpm

REM install 
call pnpm install

REM Prevent the terminal from closing
pause

REM Print success message
echo All commands executed successfully!