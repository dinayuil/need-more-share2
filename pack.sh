name="need-more-share.zip"
srcname="need-more-share-src.zip" 

rm -f ${name}
rm -f ${srcname}

echo "pack to ${name}: "
cd browser-extension/
zip -r ${name} . 
mv ${name} ../
cd ../

echo
echo "pack to ${srcname}: "
zip -x '*.DS_Store*' -x '*.git*' -x 'demo/*' -x 'node_modules/*' -x "bower_components/*" -x "${name}" -r ${srcname} .