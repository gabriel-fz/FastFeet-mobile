import styled from 'styled-components/native';

export const Container = styled.View`
  border-radius: 4px;
  align-self: stretch;
  border: 1px solid #eee;
  margin-bottom: 28px;
`;

export const Header = styled.View`
  align-self: stretch;
  background: #fff;
  flex-direction: row;
  align-items: center;
  padding: 13px;
`;

export const Content = styled.View`
  align-self: stretch;
  background: #fff;
  padding: 13px 13px 20px;
`;

export const Footer = styled.View`
  flex-direction: row;
  align-self: stretch;
  background: #f8f9fd;
  justify-content: space-between;
  align-items: flex-end;
  padding: 20px;
`;

export const Name = styled.Text`
  font-weight: bold;
  font-size: 14px;
  color: #7d40e7;
  margin-left: 10px;
`;

export const Detail = styled.View`
  align-items: flex-start;
`;

export const TitleDetail = styled.Text`
  font-size: 8px;
  font-weight: bold;
  color: #999999;
`;

export const TextDetail = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #444444;
`;

export const DetailLinkText = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #7d40e7;
`;
