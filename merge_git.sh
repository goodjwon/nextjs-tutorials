# next00부터 next07까지 순서대로 실행
for dir in next00 next01 next03 next04 next05 next06 nextjs-tutorial-next00 nextjs-tutorial-next07 todo-list-ui; do
    # 해당 서브 디렉터리로 이동
    cd $dir
    
    # 기존의 git 레파지토리를 .git_backup으로 백업 (필요시)
    mv .git .git_backup
    
    # nextjs-tutorials 레파지토리로 이동
    cd ..
    
    # 파일과 폴더를 스테이징 후 커밋
    git add $dir
    git commit -m "Merged $dir repository into nextjs-tutorials"
done
