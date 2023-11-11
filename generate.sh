read -p "What is folder name (Press enter)? " folder_name
name="${folder_name}"

mkdir $name && cp -R ./templates/* ./$name/