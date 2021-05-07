<script src="//cdnjs.cloudflare.com/ajax/libs/axios/0.18.0/axios.js"></script>
<script>
    // Get all data
    axios.get('https://sheetdb.io/api/v1/58f61be4dda40')
    .then( response => {
        console.log(response.data);
    });

    // Get 10 results starting from 20
    axios.get('https://sheetdb.io/api/v1/58f61be4dda40?limit=10&offset=20')
    .then( response => {
        console.log(response.data);
    });

    // Get all data sorted by name in ascending order
    axios.get('https://sheetdb.io/api/v1/58f61be4dda40?sort_by=name&sort_order=asc')
    .then( response => {
        console.log(response.data);
    });
</script>