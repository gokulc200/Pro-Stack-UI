$(document).ready(function() {
    // Sample data for the rows
    const rowData = [
      [
        { imageSrc: 'https://e7.pngegg.com/pngimages/415/765/png-clipart-user-profile-linkedin-netwerk-money-order-fulfillment-round-face-saving-expert.png', name: 'Amanda Harvey', email:'amanda@site.com', phone: '+1-202-555-0140', country:'United Kingdom', accountStatus:'🟢Active', orders:3 },
        {imageSrc: 'https://oliver-andersen.se/wp-content/uploads/2018/03/cropped-Profile-Picture-Round-Color.png', name: 'Anne Richard', email:'anne@site.com', phone: '+1-752-235-2353', country:'United States', accountStatus:'🔴Disabled', orders:5 },
        {imageSrc: 'https://sincerelyvictoriat.com/wp-content/uploads/2019/11/round-profile-picture-1-300x300.png', name: 'Bob Dean', email:'bob@site.com', phone: '+1-854-235-9755', country:'Austria', accountStatus:'🔴Disabled', orders:1 },
        {imageSrc: 'https://simg.nicepng.com/png/small/182-1829287_cammy-lin-ux-designer-circle-picture-profile-girl.png', name: 'Brian Halligan', email:'brian@site.com', phone: '+1-141-463-1512', country:'France', accountStatus:'🟢Active', orders:2 },
        {imageSrc: 'https://img.freepik.com/premium-vector/woman-avatar-profile-round-icon_24640-14042.jpg', name: 'Banda Zarvey', email:'banda@site.com', phone: '+1-452-789-9853', country:'Russia', accountStatus:'🔴Disabled', orders:4 },
        {imageSrc: 'https://p.kindpng.com/picc/s/394-3947019_round-profile-picture-png-transparent-png.png', name: 'Kenne Lichard', email:'kenne@site.com', phone: '+1-100-456-1025', country:'Norway', accountStatus:'🟢Active', orders:2 },
        {imageSrc: 'https://www.dell.org/wp-content/uploads/2022/01/KatieW.png', name: 'Kobe Lean', email:'kobe@site.com', phone: '+1-854-235-9755', country:'Austria', accountStatus:'🔴Disabled', orders:1 },
        {imageSrc: 'https://www.pngitem.com/pimgs/m/627-6275754_chad-profile-pic-profile-photo-circle-png-transparent.png', name: 'Zrian Balligan', email:'zrian@site.com', phone: '+1-456-259-4575', country:'Germany', accountStatus:'🟢Active', orders:3 },
      ],
      [
        {imageSrc: 'https://img.freepik.com/premium-vector/woman-avatar-profile-round-icon_24640-14042.jpg', name: 'Banda Zarvey', email:'banda@site.com', phone: '+1-452-789-9853', country:'Russia', accountStatus:'🔴Disabled', orders:4 },
        {imageSrc: 'https://p.kindpng.com/picc/s/394-3947019_round-profile-picture-png-transparent-png.png', name: 'Kenne Lichard', email:'kenne@site.com', phone: '+1-100-456-1025', country:'Norway', accountStatus:'🟢Active', orders:2 },
        {imageSrc: 'https://www.dell.org/wp-content/uploads/2022/01/KatieW.png', name: 'Kobe Lean', email:'kobe@site.com', phone: '+1-854-235-9755', country:'Austria', accountStatus:'🔴Disabled', orders:1 },
        {imageSrc: 'https://www.pngitem.com/pimgs/m/627-6275754_chad-profile-pic-profile-photo-circle-png-transparent.png', name: 'Zrian Balligan', email:'zrian@site.com', phone: '+1-456-259-4575', country:'Germany', accountStatus:'🟢Active', orders:3 },
        {imageSrc: 'https://e7.pngegg.com/pngimages/415/765/png-clipart-user-profile-linkedin-netwerk-money-order-fulfillment-round-face-saving-expert.png', name: 'Amanda Harvey', email:'amanda@site.com', phone: '+1-202-555-0140', country:'United Kingdom', accountStatus:'🟢Active', orders:3 },
        {imageSrc: 'https://oliver-andersen.se/wp-content/uploads/2018/03/cropped-Profile-Picture-Round-Color.png', name: 'Anne Richard', email:'anne@site.com', phone: '+1-752-235-2353', country:'United States', accountStatus:'Disabled', orders:3 },
        {imageSrc: 'https://sincerelyvictoriat.com/wp-content/uploads/2019/11/round-profile-picture-1-300x300.png', name: 'Bob Dean', email:'bob@site.com', phone: '+1-854-235-9755', country:'Austria', accountStatus:'🔴Disabled', orders:3 },
        {imageSrc: 'https://simg.nicepng.com/png/small/182-1829287_cammy-lin-ux-designer-circle-picture-profile-girl.png', name: 'Brian Halligan', email:'brian@site.com', phone: '+1-141-463-1512', country:'France', accountStatus:'🟢Active', orders:3 },
      ],
      [
        {imageSrc: 'https://www.pngitem.com/pimgs/m/627-6275754_chad-profile-pic-profile-photo-circle-png-transparent.png', name: 'Zendaya', email:'zendaya@site.com', phone: '+1-185-471-012030', country:'Brazil', accountStatus:'🟢Active', orders:5 },
        {imageSrc: 'https://oliver-andersen.se/wp-content/uploads/2018/03/cropped-Profile-Picture-Round-Color.png', name: 'Anne Richard', email:'anne@site.com', phone: '+1-752-235-2353', country:'United States', accountStatus:'🔴Disabled', orders:2 },
        {imageSrc: 'https://simg.nicepng.com/png/small/182-1829287_cammy-lin-ux-designer-circle-picture-profile-girl.png', name: 'Bob Dean', email:'bob@site.com', phone: '+1-854-235-9755', country:'Austria', accountStatus:'🔴Disabled', orders:6 },
        {imageSrc: 'https://sincerelyvictoriat.com/wp-content/uploads/2019/11/round-profile-picture-1-300x300.png', name: 'Brian Halligan', email:'brian@site.com', phone: '+1-141-463-1512', country:'France', accountStatus:'🟢Active', orders:4 },
        {imageSrc: 'https://img.freepik.com/premium-vector/woman-avatar-profile-round-icon_24640-14042.jpg', name: 'Banda Zarvey', email:'banda@site.com', phone: '+1-452-789-9853', country:'Russia', accountStatus:'🔴Disabled', orders:4 },
        {imageSrc: 'https://p.kindpng.com/picc/s/394-3947019_round-profile-picture-png-transparent-png.png', name: 'Kenne Lichard', email:'kenne@site.com', phone: '+1-100-456-1025', country:'Norway', accountStatus:'🟢Active', orders:2 },
        {imageSrc: 'https://www.dell.org/wp-content/uploads/2022/01/KatieW.png', name: 'Kobe Lean', email:'kobe@site.com', phone: '+1-854-235-9755', country:'Austria', accountStatus:'🔴Disabled', orders:1 },
        {imageSrc: 'https://e7.pngegg.com/pngimages/415/765/png-clipart-user-profile-linkedin-netwerk-money-order-fulfillment-round-face-saving-expert.png', name: 'Zrian Balligan', email:'zrian@site.com', phone: '+1-456-259-4575', country:'Germany', accountStatus:'🟢Active', orders:3 },
      ],
      [
        {imageSrc: 'https://oliver-andersen.se/wp-content/uploads/2018/03/cropped-Profile-Picture-Round-Color.png', name: 'Banda Zarvey', email:'banda@site.com', phone: '+1-452-789-9853', country:'Russia', accountStatus:'🔴Disabled', orders:4 },
        {imageSrc: 'https://simg.nicepng.com/png/small/182-1829287_cammy-lin-ux-designer-circle-picture-profile-girl.png', name: 'Kenne Lichard', email:'kenne@site.com', phone: '+1-100-456-1025', country:'Norway', accountStatus:'🟢Active', orders:2 },
        {imageSrc: 'https://www.dell.org/wp-content/uploads/2022/01/KatieW.png', name: 'Kobe Lean', email:'kobe@site.com', phone: '+1-854-235-9755', country:'Austria', accountStatus:'🔴Disabled', orders:1 },
        {imageSrc: 'https://www.pngitem.com/pimgs/m/627-6275754_chad-profile-pic-profile-photo-circle-png-transparent.png', name: 'Zrian Balligan', email:'zrian@site.com', phone: '+1-456-259-4575', country:'Germany', accountStatus:'🟢Active', orders:3 },
        {imageSrc: 'https://e7.pngegg.com/pngimages/415/765/png-clipart-user-profile-linkedin-netwerk-money-order-fulfillment-round-face-saving-expert.png', name: 'Amanda Harvey', email:'amanda@site.com', phone: '+1-202-555-0140', country:'United Kingdom', accountStatus:'🟢Active', orders:3 },
        {imageSrc: 'https://img.freepik.com/premium-vector/woman-avatar-profile-round-icon_24640-14042.jpg', name: 'Anne Richard', email:'anne@site.com', phone: '+1-752-235-2353', country:'United States', accountStatus:'Disabled', orders:3 },
        {imageSrc: 'https://sincerelyvictoriat.com/wp-content/uploads/2019/11/round-profile-picture-1-300x300.png', name: 'Bob Dean', email:'bob@site.com', phone: '+1-854-235-9755', country:'Austria', accountStatus:'🔴Disabled', orders:3 },
        {imageSrc: 'https://p.kindpng.com/picc/s/394-3947019_round-profile-picture-png-transparent-png.png', name: 'Brian Halligan', email:'brian@site.com', phone: '+1-141-463-1512', country:'France', accountStatus:'🟢Active', orders:3 },
      ],
      // Add more array objects as needed
    ];

    let currentIndex = 0;
    const maxIndex = rowData.length - 1;
    let checkedCount = 0;

    // Function to populate table rows
    function populateTableRows(index) {
      const tableBody = $('#tableBody');
      tableBody.empty(); // Clear existing rows

      const dataArray = rowData[index];

      dataArray.forEach(function(data) {
        const row = $('<tr>');
        const cell1 = $('<td>');
        const cell2 = $('<td>');
        const cell3 = $('<td>');
        const cell4 = $('<td>');
        const cell5 = $('<td>');
        const cell6 = $('<td>');
          
        // Create a checkbox element
        const checkbox = $('<input>');
        checkbox.attr('type', 'checkbox');

        checkbox.click(function() {
          if ($(this).prop('checked')) {
            checkedCount++;
          } else {
            checkedCount--;
          }
          $('#checkedCount').text(checkedCount);
        });

        // Create an image input element
        const imageInput = $('<input>');
        imageInput.attr('type', 'image');
        imageInput.attr('src', data.imageSrc);
        imageInput.addClass('profile-logo');

        // Create a span element for the name
        const nameSpan = $('<span>').text(data.name);

        const firstContainer = $('<div>');
        firstContainer.addClass('first-container');
        firstContainer.append(checkbox);
        firstContainer.append(imageInput);
        firstContainer.append(nameSpan);

        // Create a span element for the email
        const emailSpan = $('<span>').text(data.email);
        
        // Create a span element for the phone
        const phoneSpan = $('<span>').text(data.phone);

        // Create a span element for the country
        const countrySpan = $('<span>').text(data.country);

        // Create a span element for the account status
        const accountStatusSpan = $('<span>').text(data.accountStatus);

        // Create a span element for the orders
        const orderSpan = $('<span>').text(data.orders);

        cell1.append(firstContainer);
        cell2.append(emailSpan);
        cell3.append(phoneSpan);
        cell4.append(countrySpan);
        cell5.append(accountStatusSpan);
        cell6.append(orderSpan);

        // Append the cells to the row
        row.append(cell1);
        row.append(cell2);
        row.append(cell3);
        row.append(cell4);
        row.append(cell5);
        row.append(cell6);

        // Append the row to the table body
        tableBody.append(row);
      });
    }

    // Function to handle button clicks
    function handleButtonClick() {
      populateTableRows(currentIndex);

      // Enable/disable buttons based on the current index
      if (currentIndex === 0) {
        $('#prevButton').prop('disabled', true);
      } else {
        $('#prevButton').prop('disabled', false);
      }

      if (currentIndex === maxIndex) {
        $('#nextButton').prop('disabled', true);
      } else {
        $('#nextButton').prop('disabled', false);
      }
    }

    function deleteCheckedRows() {
      const checkedBoxes = $('#tableBody input[type="checkbox"]:checked');
      checkedBoxes.each(function() {
        $(this).closest('tr').remove();
        checkedCount--;
      });
      $('#checkedCount').text(checkedCount);
    }
    // Initial population of the table
    populateTableRows(currentIndex);

    // Button click event handlers
    $('#prevButton').click(function() {
      $('#nextButton').removeClass('highlighted');
      $(this).addClass('highlighted');
      if (currentIndex > 0) {
        currentIndex--;
        handleButtonClick();
      }
    });

    $('#nextButton').click(function() {
      $('#prevButton').removeClass('highlighted');
      $(this).addClass('highlighted');
      if (currentIndex < maxIndex) {
        currentIndex++;
        handleButtonClick();
      }
    });

    $('.delete-btn').click(function() {
      deleteCheckedRows();
    });

    $('.add-btn').click(function() {
      confirm("This Feature is available only for Prime customers!");
    });

    $('#close-button').click(function(){
      $('.left-portion').hide();
      $('.hide-portion').show();
    })

    $('.hide-portion').hide();

    $('.hide-portion').click(function(){
      $('.left-portion').show();
      $('.hide-portion').hide();
    })

    $('.down-arrow').hide();

    $('.dashboard-up').hide();
    $('.pages-details').hide();

    $('.dashboard-down').click(function(){
      $('.pages-details').show();
      $('.dashboard-down').hide();
      $('.dashboard-up').show();
    })

    $('.dashboard-up').click(function(){
      $('.pages-details').hide();
      $('.dashboard-down').show();
      $('.dashboard-up').hide();
    })

    $('.no-records-down-arrow').click(function(){
      confirm("No records are available");
    })

    $('.records-down-arrow').click(function(){
      confirm("You are viewing E-commerce records");
    })

    $('.up-arrow').click(function(){
      $('.up-arrow').hide();
      $('.down-arrow').show();
      $('.account-details').hide();
    })

    $('.down-arrow').click(function(){
      $('.up-arrow').show();
      $('.down-arrow').hide();
      $('.account-details').show();
    })

    $('.content-details').click(function(){
      $('.content-details').removeClass('highlighted');
      $(this).addClass('highlighted');
    })

    $('.search-box').on('keyup', function() {
        var value = $(this).val().toLowerCase(); // Get the search value and convert it to lowercase
        $('#tableBody tr').filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1); // Show/hide rows based on search value match
        });
      });
  });
