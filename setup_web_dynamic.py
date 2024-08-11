# setup_web_dynamic.py
import os
import shutil

# Paths
src_dir = 'web_flask'
dst_dir = 'web_dynamic'

# Creating destination directories in case they don't exist
os.makedirs(f'{dst_dir}/static', exist_ok=True)
os.makedirs(f'{dst_dir}/templates', exist_ok=True)

# Copying directories and files
shutil.copytree(f'{src_dir}/static', f'{dst_dir}/static', dirs_exist_ok=True)
shutil.copy(f'{src_dir}/templates/100-hbnb.html', f'{dst_dir}/templates/100-hbnb.html')
shutil.copy(f'{src_dir}/__init__.py', f'{dst_dir}/__init__.py')
shutil.copy(f'{src_dir}/100-hbnb.py', f'{dst_dir}/100-hbnb.py')

# Renaming the copied files
os.rename(f'{dst_dir}/100-hbnb.py', f'{dst_dir}/0-hbnb.py')
os.rename(f'{dst_dir}/templates/100-hbnb.html', f'{dst_dir}/templates/0-hbnb.html')

print("Files copied and renamed successfully")
