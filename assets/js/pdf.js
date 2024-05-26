$(document).ready(function() {
    $('#reason').val("for higher education");
});

function generateCertificate() {
    var refNo = $('#refNo').val();
    var emisNo = $('#emisNo').val();
    var certificateDate = $('#certificate-date').val();
    var studentName = $('#studentName').val();
    var fatherName = $('#fatherName').val();
    var motherName = $('#motherName').val();
    var admissionYear = $('#admissionYear').val();
    var admittedClass = $('#admittedClass').val();
    var graduatedClass = $('#graduatedClass').val();
    var grade = $('#grade').val();
    var reason = $('#reason').val();

    $('#refNoOutput').text(refNo);
    $('#emisNoOutput').text(emisNo);
    $('#certificateDateOutput').text(certificateDate);
    $('#studentNameOutput').text(studentName);
    $('#studentNameOutput2').text(studentName);
    $('#fatherNameOutput').text(fatherName);
    $('#motherNameOutput').text(motherName);
    $('#admissionYearOutput').text(admissionYear);
    $('#admittedClassOutput').text(admittedClass);
    $('#graduatedClassOutput').text(graduatedClass);
    $('#gradeOutput').text(grade);
    $('#reasonOutput').text(reason);

    var studentTransPdfModal = new bootstrap.Modal(document.getElementById('studentTransferpdf'));
        studentTransPdfModal.show();
}
